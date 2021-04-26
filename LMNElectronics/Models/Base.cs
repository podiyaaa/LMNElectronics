using System;
using System.ComponentModel.DataAnnotations;

namespace LMNElectronics.Models
{
    public class Base
    {
        public Base()
        {
            Id = new Guid();
        }

        [Key]
        public Guid Id { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedOn { get; set; }

        public DateTime LastAccessed { get; set; }
    }
}
