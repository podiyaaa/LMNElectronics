using System;
using System.Collections.Generic;

namespace LMNElectronics.Models
{
    public class Order: Base
    {
        public ApplicationUser User { get; set; }
        public DeliveryState DeliveryState { get; set; }
        public ICollection<ElectronicItem> ElectronicItems { get; set; }
        public Order()
        {
        }
    }

    public enum DeliveryState
    {
        PENDING,
        ACCEPTED,
        WRAPPING,
        SHIPED,
        DELIVERED,
        DECLINED
    }

    public class OrderElectronicItem: Base
    {
        public int ElectronicItemId { get; set; }
        public ElectronicItem ElectronicItem { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}

