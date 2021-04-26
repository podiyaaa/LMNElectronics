using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMNElectronics.Contexts;
using LMNElectronics.Models;

namespace LMNElectronics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElectronicItemCategoryController : ControllerBase
    {
        private readonly LMNElectronicsDBContext _context;

        public ElectronicItemCategoryController(LMNElectronicsDBContext context)
        {
            _context = context;
        }

        // GET: api/ElectronicItemCategory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ElectronicItemCategory>>> GetElectronicItemCategories()
        {
            return await _context.ElectronicItemCategories.ToListAsync();
        }

        // GET: api/ElectronicItemCategory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ElectronicItemCategory>> GetElectronicItemCategory(Guid id)
        {
            var electronicItemCategory = await _context.ElectronicItemCategories.FindAsync(id);

            if (electronicItemCategory == null)
            {
                return NotFound();
            }

            return electronicItemCategory;
        }

        // PUT: api/ElectronicItemCategory/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutElectronicItemCategory(Guid id, ElectronicItemCategory electronicItemCategory)
        {
            if (id != electronicItemCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(electronicItemCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ElectronicItemCategoryExists(id))
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

        // POST: api/ElectronicItemCategory
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ElectronicItemCategory>> PostElectronicItemCategory(ElectronicItemCategory electronicItemCategory)
        {
            _context.ElectronicItemCategories.Add(electronicItemCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetElectronicItemCategory", new { id = electronicItemCategory.Id }, electronicItemCategory);
        }

        // DELETE: api/ElectronicItemCategory/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ElectronicItemCategory>> DeleteElectronicItemCategory(Guid id)
        {
            var electronicItemCategory = await _context.ElectronicItemCategories.FindAsync(id);
            if (electronicItemCategory == null)
            {
                return NotFound();
            }

            _context.ElectronicItemCategories.Remove(electronicItemCategory);
            await _context.SaveChangesAsync();

            return electronicItemCategory;
        }

        private bool ElectronicItemCategoryExists(Guid id)
        {
            return _context.ElectronicItemCategories.Any(e => e.Id == id);
        }
    }
}
