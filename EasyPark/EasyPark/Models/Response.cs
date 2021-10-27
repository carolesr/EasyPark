using System.Collections.Generic;

namespace EasyPark.Models
{
    public class Response
    {
        public bool Success { get; set; }
        public object Result { get; private set; }
        public List<string> Messages { get; }

        public Response() { }
        public Response(object obj, bool success = true)
        {
            Success = success;
            Result = obj;
        }

        public Response(string message, bool success)
        {
            Success = success;
            if (Messages == null) Messages = new List<string>();
            AddMessage(message);
        }

        public Response(List<string> messages, bool success)
        {
            Success = success;
            if (Messages == null) Messages = new List<string>();
            AddMessage(messages);
        }

        public void AddResult(object obj)
        {
            Result = obj;
        }

        public void AddMessage(string message)
        {
            Messages.Add(message);
        }

        public void AddMessage(List<string> messages)
        {
            messages.ForEach(m => Messages.Add(m));
        }
    }
}
