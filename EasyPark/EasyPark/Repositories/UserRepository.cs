using EasyPark.Models;
using EasyPark.Repositories.Interfaces;
using MongoDB.Driver;
using System.Collections.Generic;

namespace EasyPark.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _entity;
        public UserRepository(IDatabaseSettings<User> settings)
        {
            _entity = settings.Collection;          
        }

        public IEnumerable<User> Get()
        {
            return _entity.Find(e => true).ToList();
        }

        public void Insert(User entity)
        {
            _entity.InsertOne(entity);
        }

        public void Update(User entity)
        {
            _entity.ReplaceOne(e => e.Id == entity.Id, entity);
        }

        public void Delete(string id)
        {
            _entity.DeleteOne(e => e.Id == id);
        }
    }
}
