using EasyPark.Models.Entities;
using EasyPark.Repositories.Interfaces;
using MongoDB.Driver;
using System.Collections.Generic;

namespace EasyPark.Repositories
{
    public class EstablishmentRepository : IEstablishmentRepository
    {
        private readonly IMongoCollection<Establishment> _entity;
        public EstablishmentRepository(IDatabaseSettings<Establishment> settings)
        {
            _entity = settings.Collection;
        }

        public IEnumerable<Establishment> Get()
        {
            return _entity.Find(e => true).ToList();
        }

        public void Insert(Establishment entity)
        {
            _entity.InsertOne(entity);
        }

        public void Update(Establishment entity)
        {
            _entity.ReplaceOne(e => e.Id == entity.Id, entity);
        }

        public void Delete(string id)
        {
            _entity.DeleteOne(e => e.Id == id);
        }
    }
}
