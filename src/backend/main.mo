import Time "mo:base/Time";
import Array "mo:base/Array";

actor {
  type ContactSubmission = {
    id: Nat;
    name: Text;
    email: Text;
    message: Text;
    timestamp: Int;
  };

  stable var submissions: [ContactSubmission] = [];
  stable var nextId: Nat = 0;

  public func submitContact(name: Text, email: Text, message: Text) : async { ok: Bool; message: Text } {
    let submission: ContactSubmission = {
      id = nextId;
      name = name;
      email = email;
      message = message;
      timestamp = Time.now();
    };
    submissions := Array.append(submissions, [submission]);
    nextId += 1;
    return { ok = true; message = "Thank you! We'll be in touch soon." };
  };

  public query func getSubmissions() : async [ContactSubmission] {
    return submissions;
  };
}
