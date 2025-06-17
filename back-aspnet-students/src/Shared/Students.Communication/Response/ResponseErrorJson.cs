namespace Students.Communication.Response;
public class ResponseErrorJson
{
    public IList<string> Error { get; set; }
    public ResponseErrorJson(IList<string> error ) => Error = error;
    public ResponseErrorJson(string error) => Error = new List<string> { error };
}
