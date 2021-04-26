using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMNElectronics.Authentication;
using LMNElectronics.Contexts;
using LMNElectronics.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LMNElectronics.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ElectronicItemsController : ControllerBase
    {
        private readonly LMNElectronicsDBContext _context;

        public ElectronicItemsController(LMNElectronicsDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<ElectronicItem>>> GetElectronicItems()
        {
            return await _context.ElectronicItems.Include(e => e.Category).ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ElectronicItem>> GetElectronicItem(Guid id)
        {
            var electronicItem = await _context.ElectronicItems.FindAsync(id);

            if (electronicItem == null)
            {
                return NotFound();
            }

            return electronicItem;
        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<ElectronicItem>>> GetElectronicItemsBySearch([FromQuery]string name = "",
            [FromQuery] int pmin = 0, [FromQuery] int pmax = 0, [FromQuery] string categoryId = null)
        {
            
            if (name == null && categoryId == null)
            {
                return await _context.ElectronicItems.Include(i => i.Category).ToListAsync();
            }

            List<ElectronicItem> items = new List<ElectronicItem>();
            if (categoryId == null || categoryId == "")
            {
                items = await _context.ElectronicItems.Include(i => i.Category).ToListAsync();
            }
            else if (categoryId != "")
            {
                var guid = Guid.Parse(categoryId);
                var category = _context.ElectronicItemCategories.Find(guid);
                items.AddRange(await(from ei in _context.ElectronicItems where ei.Category.Equals(category) select ei).ToListAsync());
            } 

            if (name != "")
            {
                items = items.Where(item => item.Name.ToLower().Contains(name.ToLower())).ToList();

            }

            if (pmax != 0)
            {
                items = items.Where(item => item.Price >= pmin && item.Price <= pmax).ToList();
            } else if (pmax == 0)
            {
                items.Clear();
            }

            

            return items;
        }

        //[Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutElectronicItem(Guid id, ElectronicItem electronicItem)
        {
            if (id != electronicItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(electronicItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ElectronicItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //[Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public async Task<ActionResult<ElectronicItem>> PostElectronicItem(ElectronicItemRequestViewModel electronicItemRequestViewModel)
        {
            var category  = _context.ElectronicItemCategories.Find(electronicItemRequestViewModel.CategoryId);
            var electronicItem = new ElectronicItem
            {
                Name = electronicItemRequestViewModel.Name,
                ImageURL = electronicItemRequestViewModel.ImageURL,
                Price = electronicItemRequestViewModel.Price,
                Quantity = electronicItemRequestViewModel.Quantity,
                Category = category
            };

            _context.ElectronicItems.Add(electronicItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetElectronicItem", new { id = electronicItem.Id }, electronicItem);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public async Task<ActionResult<ElectronicItem>> DeleteElectronicItem(Guid id)
        {
            var electronicItem = await _context.ElectronicItems.FindAsync(id);
            if (electronicItem == null)
            {
                return NotFound();
            }

            _context.ElectronicItems.Remove(electronicItem);
            await _context.SaveChangesAsync();

            return electronicItem;
        }

        private bool ElectronicItemExists(Guid id)
        {
            return _context.ElectronicItems.Any(e => e.Id == id);
        }
    }
}
