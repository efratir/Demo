using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class UserDto
    {

        //  public bool IsAuthorized { get; set; }
        
  

        public string userId { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public Nullable<System.DateTime> participantDateOfBirth { get; set; }
        //  public string ErrorMessage { get; set; }

        //public bool IsAuthorized { get; set; }
        //public int UserId { get; set; }
        //public string UserName { get; set; }
        //public string ErrorMessage { get; set; }
    }
}
