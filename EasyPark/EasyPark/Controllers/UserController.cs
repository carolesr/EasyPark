using EasyPark.Models;
using EasyPark.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EasyPark.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("index")]
        public ActionResult Index()
        {
            return Ok("hello world");
        }

        [HttpGet]
        [Route("getAll")]
        public ActionResult GetAll()
        {
            var result = _service.GetAll();
            return Ok(result);
        }

        [HttpPost]
        [Route("create")]
        public ActionResult Create(User user)
        {
            _service.CreateUser(user);
            return Ok("Usuário criado com sucesso");
        }
    }
}
