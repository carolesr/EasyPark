using EasyPark.Models;
using System.Collections.Generic;

namespace EasyPark.Services.Interfaces
{
    public interface IUserService
    {
        public IEnumerable<User> GetAll();
    }
}
