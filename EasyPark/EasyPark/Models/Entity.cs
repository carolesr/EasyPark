using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models
{
    public class Entity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
    }
}
