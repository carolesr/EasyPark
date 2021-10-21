using EasyPark.Models;
using EasyPark.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace EasyPark.Repositories
{
    public class DatabaseSettings<T> : IDatabaseSettings<T> where T : Entity
    {
        public IMongoCollection<T> Collection { get; set; }

        public DatabaseSettings(IConfiguration configuration)
        {
            var configs = configuration.GetSection("DatabaseSettings");
            var client = new MongoClient(configs["ConnectionString"]);
            var database = client.GetDatabase(configs["DatabaseName"]);
            Collection = database.GetCollection<T>(configs[typeof(T).Name]);
        }
    }
}
