using Google.Cloud.Firestore;

namespace bdo_player_tool.Models
{
    public class FamilyMember
    {
        public Guid Id { get; set; }
        public DocumentReference FamilyId { get; set; }
        public String? Name { get; set; }
        public int Level { get; set; }
    }
}
