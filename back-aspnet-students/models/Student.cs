namespace back_aspnet_students.models;

public class Student
{
   public string Id { get; set; } = string.Empty; 
    public string Name { get; set; } = string.Empty; 
    public string Email { get; set; } = string.Empty;
    public string Course { get; set; } = string.Empty; 
    public DateTime CreatedAt { get; set; } 
    public DateTime UpdatedAt { get; set; } 
}
