using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models.Entities
{
    public class User : Entity
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("cpf")]
        public string CPF { get; set; }

        [BsonElement("phone")]
        public string Phone { get; set; }

        [BsonElement("vehicles")]
        public List<Vehicle> Vehicles { get; set; }

        [BsonElement("cards")]
        public List<Card> Cards { get; set; }

        [BsonElement("sessions")]
        public List<Session> Sessions { get; set; }
    }
}
