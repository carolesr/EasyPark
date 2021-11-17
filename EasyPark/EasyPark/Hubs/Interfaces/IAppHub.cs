using EasyPark.Models.Entities;
using System.Threading.Tasks;

namespace EasyPark.Hubs.Interfaces
{
    public interface IAppHub
    {
        public Task NotifyNewSession(Session session);
        public Task NotifySessionFinished(Session session);
        public void NotifySpotOccupied(string spot);
    }
}
