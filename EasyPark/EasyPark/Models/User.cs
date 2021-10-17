using System.Collections.Generic;

namespace EasyPark.Models
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string CPF { get; set; }
        public string Phone { get; set; }
        public List<Vehicle> Vehicles { get; set; }
        public List<Card> Cards { get; set; }
        public List<Session> Sessions { get; set; }
    }
}
