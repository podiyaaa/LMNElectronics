using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace LMNElectronics.Contexts
{
    public partial class ApplicationUserContext : IdentityDbContext<IdentityUser>
    {

        public ApplicationUserContext(DbContextOptions<ApplicationUserContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

        }
    }
}
