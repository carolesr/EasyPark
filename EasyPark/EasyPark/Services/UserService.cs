﻿using EasyPark.Models;
using EasyPark.Repositories.Interfaces;
using EasyPark.Services.Interfaces;
using System.Collections.Generic;

namespace EasyPark.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<User> GetAll()
        {
            return _repository.Get();
        }
    }
}