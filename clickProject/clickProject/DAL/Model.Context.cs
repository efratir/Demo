﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DBContext : DbContext
    {
        public DBContext()
            : base("name=DBContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<participantTable> participantTable { get; set; }
        public virtual DbSet<playTable> playTable { get; set; }
        public virtual DbSet<questionnaireTable> questionnaireTable { get; set; }
        public virtual DbSet<subjectTable> subjectTable { get; set; }
        public virtual DbSet<userTable> userTable { get; set; }
        public virtual DbSet<questionTable> questionTable { get; set; }
    }
}
