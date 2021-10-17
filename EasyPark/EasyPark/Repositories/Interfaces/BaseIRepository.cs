using EasyPark.Models;
using System.Collections.Generic;

namespace EasyPark.Repositories.Interfaces
{
    public interface BaseIRepository<T> where T : Entity
    {
        public IEnumerable<T> Get();
        public void Insert(T entity);
        public void Update(T entity);
        public void Delete(int id);


    }
}
