//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class questionnaireTable
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public questionnaireTable()
        {
            this.playTable = new HashSet<playTable>();
            this.questionTable = new HashSet<questionTable>();
        }
    
        public int questionnaireCode { get; set; }
        public int subjectNameCode { get; set; }
        public int matchingFromAge { get; set; }
        public int matchingUntilAge { get; set; }
        public string questionnaireName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<playTable> playTable { get; set; }
        public virtual subjectTable subjectTable { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<questionTable> questionTable { get; set; }
    }
}
