using System;
using System.Diagnostics;
using back_aspnet_students.Data;
using back_aspnet_students.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace back_aspnet_students.Controllers;

[Route("students")]
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly AppDataContext _context;

    public StudentsController(AppDataContext context)
    {
       _context = context;
    }

    // GET: students
   [HttpGet]
   public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
   {
    return await _context.Student.ToListAsync();
   }

   // GET: students/{id}
   [HttpGet("{id}")]
   public async Task<ActionResult<Student>> GetStudent(String id)
   {
    var student = await _context.Student.FindAsync(id);

    if (student == null)
    {
        return NotFound();
    }

    return student;
   }

   // POST: students
   [HttpPost]
   public async Task<ActionResult<Student>> PostStudent(Student student)
   {
    // Gerar o ID automaticamente
    student.id = "ccuid-" + Guid.NewGuid().ToString();

    student.createdAt = DateTime.UtcNow;
    student.updatedAt = DateTime.UtcNow;

    _context.Student.Add(student);
    await _context.SaveChangesAsync();

    // Corrigindo o CreatedAtAction para usar o caminho correto
    return CreatedAtAction(nameof(GetStudent), new { id = student.id }, student);
   }

   // PUT: students/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> PutStudent(string id, Student student)
    {
        if (id != student.id)
        {
            return BadRequest();
        }

        var existingStudent = await _context.Student.FindAsync(id);
        if (existingStudent == null)
        {
            return NotFound();
        }


        // Verificar e atualizar os campos que foram passados na requisição
        if (!string.IsNullOrEmpty(student.name))
        {
            existingStudent.name = student.name;
        }

        if (!string.IsNullOrEmpty(student.email))
        {
            existingStudent.email = student.email;
        }

        if (!string.IsNullOrEmpty(student.course))
        {
            existingStudent.course = student.course;
        }


        existingStudent.updatedAt = DateTime.UtcNow;

        _context.Entry(existingStudent).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: students/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStudent(string id)
    {
        var student = await _context.Student.FindAsync(id);
        if (student == null)
        {
            return NotFound();
        }

        _context.Student.Remove(student);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
