namespace Students.Exception.ExceptionsBase;
public class ErrorOnValidateException : StudentsException
{
    public IList<string> ErrorMessages { get; set; }
    public ErrorOnValidateException(IList<string> errosMessages) 
    {
        ErrorMessages = errosMessages;
    }
}
