using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace lab9.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public int GenreId { get; set; }
    }
}