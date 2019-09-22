using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Contracts;
using Raven.Client.Documents;
using Raven.Client.Documents.Operations;
using Raven.Client.Documents.Session;
using Raven.Client.Exceptions;
using Raven.Client.Exceptions.Database;
using Raven.Client.ServerWide;
using Raven.Client.ServerWide.Operations;

namespace dotnetcore_webapi_and_ravendb.Providers
{
    public class RavenDBProvider : IRavenDatabaseProvider
    {
        public RavenDBProvider(IDocumentStore documentStore)
        {
            DocumentStore = documentStore;
        }
        protected IDocumentStore DocumentStore { get; set; }

        public async Task CreateEntity<T>(T entity)
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                await session.StoreAsync(entity);
                await session.SaveChangesAsync();
            }
        }

        public async Task UpdateEntity<T>(string entityId, T entity)
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                await session.StoreAsync(entity, entityId);
                await session.SaveChangesAsync();
            }
        }

        public async Task DeleteEntity(string entityId)
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                session.Delete(entityId);
                await session.SaveChangesAsync();
            }
        }

        public async Task<T> GetEntity<T>(string entityId)
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                var entity = await session.LoadAsync<T>(entityId);
                return entity;
            }
        }

        public async Task<List<T>> GetEntities<T>()
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                var entities = await session.Query<T>().ToListAsync();
                return entities;
            }
        }

        public async Task<bool> IsEntityExists(string entityId)
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                bool exists = await session.Advanced.ExistsAsync(entityId);
                return exists;
            }
        }

        public void EnsureDatabaseExists(string database = null, bool createDatabaseIfNotExists = true)
        {
            database = database ?? DocumentStore.Database;

            if (string.IsNullOrWhiteSpace(database))
                throw new ArgumentException("Value cannot be null or whitespace.", nameof(database));

            try
            {
                DocumentStore.Maintenance.ForDatabase(database).Send(new GetStatisticsOperation());
                string[] databaseNames = DocumentStore.Maintenance.Server.Send(new GetDatabaseNamesOperation(0, 25));
            }
            catch (DatabaseDoesNotExistException)
            {
                if (createDatabaseIfNotExists == false)
                    throw;

                try
                {
                    DocumentStore.Maintenance.Server.Send(new CreateDatabaseOperation(new DatabaseRecord(database)));
                }
                catch (ConcurrencyException)
                {
                    // The database was already created before calling CreateDatabaseOperation
                }

            }
        }

        public IDocumentSession GetSession()
        {
            var session = DocumentStore.OpenSession();
            return session;
        }

        public async Task CommitAsync(IAsyncDocumentSession session)
        {
            session.SaveChangesAsync();
            session.Dispose();
        }
    }
}
