using EasyPark.Models.Entities;
using System.Collections.Generic;

namespace EasyPark.Services.Interfaces
{
    public interface IUserService
    {
        public IEnumerable<User> GetAll();
        public void CreateUser(User user);
    }
}
