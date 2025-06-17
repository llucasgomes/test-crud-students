using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Students.Application.Usecase.Student.Register;
using Students.Communication.Request;
using Students.Communication.Response;

namespace Students.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{

    [HttpGet]
    public IActionResult GetStudents()
    {
        // This is a placeholder for the actual implementation.
        // In a real application, you would retrieve students from a database or another service.
        var students = new List<string> { "Alice", "Bob", "Charlie" };
        return Ok(students);
    }

    [HttpPost]
    [ProducesResponseType(typeof(ResponseStudentJson),StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ResponseErrorJson),StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(ResponseErrorJson),StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Register(
        [FromBody] RequestRegisterStudentJson req,
        [FromServices] IRegisterStudentUseCase useCase)
    {
       
        var response = await useCase.Execute(req);
        return Created(string.Empty,response);
    }
}
