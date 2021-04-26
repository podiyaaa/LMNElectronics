using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMNElectronics.Contexts;
using LMNElectronics.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMNElectronics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        private readonly LMNElectronicsDBContext _context;

        public OrderController(LMNElectronicsDBContext context)
        {
            _context = context;
        }
        // GET: api/Order
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Order/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Order
        [HttpPost]
        public async Task<ActionResult> PostOrder(OrderRequestViewModel orderRequestViewModel)
        {
            foreach(string id in orderRequestViewModel.ProductIds)
            {
                ElectronicItem electronicItem = _context.ElectronicItems.Find(Guid.Parse(id));

            }
            return CreatedAtAction("GetElectronicItem", null);
        }

        // PUT: api/Order/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
