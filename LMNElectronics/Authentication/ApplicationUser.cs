using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace LMNElectronics
{
    public class ApplicationUser: IdentityUser
    {
        [MaxLength(36)]
        public override string Id { get; set; }

        public ApplicationUser()
        {
        }
    }
}
