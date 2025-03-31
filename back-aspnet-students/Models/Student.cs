using System.ComponentModel.DataAnnotations.Schema;

namespace back_aspnet_students.Models;

public class Student
{
    [Column("id")] // Força o nome correto da coluna
    public string id { get; set; } = string.Empty; 
    public string name { get; set; } = string.Empty; 
    public string email { get; set; } = string.Empty;
    public string course { get; set; } = string.Empty; 
    public DateTime createdAt { get; set; } 
    public DateTime updatedAt { get; set; }  
}
