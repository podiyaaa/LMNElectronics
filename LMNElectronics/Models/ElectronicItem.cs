using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LMNElectronics.Models
{
    public class ElectronicItem: Base
    {
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsAvailable => Quantity > 0;
        public string Description { get; set; }
        public ElectronicItemCategory Category { get; set; }
        public ICollection<Order> Orders { get; set; }

        public ElectronicItem()
        {
        }
    }

    public class ElectronicItemRequestViewModel 
    {
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsAvailable => Quantity > 0;
        public string Description { get; set; }
        public Guid CategoryId { get; set; }

        public ElectronicItemRequestViewModel()
        {
        }
    }

    public class ElectronicItemResponseViewModel
    {
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsAvailable => Quantity > 0;
        public string Description { get; set; }
        public ElectronicItemCategory Category { get; set; }

        public ElectronicItemResponseViewModel()
        {
        }
    }
}
