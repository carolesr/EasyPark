using MongoDB.Driver;

namespace EasyPark.Repositories.Interfaces
{
    public interface IDatabaseSettings<T>
    {
        IMongoCollection<T> Collection { get; set; }
    }
}
