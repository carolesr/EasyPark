using EasyPark.Models;
using EasyPark.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EasyPark.Controllers
{
    public class BaseController<T> : ControllerBase where T : Entity
    {
        private readonly BaseIService<T> _service;

        public BaseController(BaseIService<T> service)
        {
            _service = service;
        }
    }
}
