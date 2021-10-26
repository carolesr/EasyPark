using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models.Entities
{
    public class Establishment : Entity
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("address")]
        public string Address { get; set; }

        [BsonElement("prices")]
        public List<Price> Prices { get; set; }

        [BsonElement("spots")]
        public List<Spot> Spots { get; set; }
    }
}
