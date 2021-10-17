using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EasyPark.Models;
using EasyPark.Repositories.Interfaces;
using MongoDB.Driver;

namespace EasyPark.Repositories
{
    public class BaseRepository<T> : BaseIRepository<T> where T : Entity
    {
        private readonly IMongoCollection<T> _entity;

        public BaseRepository(IDatabaseSettings settings, string type)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _entity = database.GetCollection<T>(settings.GetType().GetProperty(type).Name);
        }
        public IEnumerable<T> Get()
        {
            return _entity.Find(t => true).ToEnumerable();
        }

        public void Insert(T entity)
        {
            _entity.InsertOne(entity);
        }

        public void Update(T entity)
        {
            _entity.ReplaceOne(e => e.Id == entity.Id, entity);
        }

        public void Delete(int id)
        {
            _entity.DeleteOne(e => e.Id == id);
        }

    }
}
