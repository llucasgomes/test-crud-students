using AutoMapper;
using Students.Application.Services.AutoMapper;
using Students.Communication.Request;
using Students.Communication.Response;
using Students.Domain.Entities;
using Students.Domain.Repositories;
using Students.Domain.Repositories.Student;
using Students.Exception.ExceptionsBase;

namespace Students.Application.Usecase.Student.Register;
public class RegisterStudentUseCase: IRegisterStudentUseCase
{
    private readonly IStudentWriteOnlyRepository _writeOnlyRepository;
    private readonly IStudentReadOnlyRepository _readOnlyRepository;
    private readonly IMapper _mapper;
    private readonly IUnitOfWork _unitOfWork;


    public RegisterStudentUseCase(
        IStudentWriteOnlyRepository writeOnlyRepository,
        IStudentReadOnlyRepository readOnlyRepository,
        IMapper mapper,
        IUnitOfWork unitOfWork
        )
    {
        _writeOnlyRepository = writeOnlyRepository;
        _readOnlyRepository = readOnlyRepository;
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }
    public async Task<ResponseStudentJson> Execute(RequestRegisterStudentJson req)
    {
        //1º Validar a request 
          Validate(req);

        //2º Mapear a request para a entidade
        var autoMapper = new AutoMapper.MapperConfiguration(opt =>
        {
            opt.AddProfile<AutoMapping>();
        }).CreateMapper();

        var student = autoMapper.Map<Domain.Entities.Student>(req);


        //3º Persistir a entidade no banco de dados
       

        //var existStudent = await _readOnlyRepository.ExistStudentWithEmail(student.Email);

        await _writeOnlyRepository.Add(student);

        await _unitOfWork.Commit();

        return new ResponseStudentJson
        {
            Id = student.Id,
            Name = student.Name,
            Email = student.Email,
            Course = student.Course
        };
    }

    private void Validate(RequestRegisterStudentJson req)
    {
        var validator = new RegisterStudentValidator();
        var response = validator.Validate(req);

        if (!response.IsValid)
        {
            var erros = response.Errors.Select(e => e.ErrorMessage).ToList();
            throw new ErrorOnValidateException(erros);
        }
    }
}
