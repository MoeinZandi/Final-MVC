using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record AppUser(
   [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    [EmailAddress, MaxLength(50)]
    string Email,
    [Length(8, 16)]
    string username,
    string Password,
    string ConfirmPassword
);