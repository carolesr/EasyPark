using EasyPark.Models.Entities;
using System.Collections.Generic;

namespace EasyPark.Repositories.Interfaces
{
    public interface IUserRepository
    {
        public IEnumerable<User> Get();
        public void Insert(User entity);
        public void Update(User entity);
        public void Delete(string id);
    }
}
