using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace bdo_player_tool.Models
{
		[FirestoreData]
    public class FamilyMember
    {
			[JsonProperty("Name")]
			[FirestoreProperty("Name")]
      public String? Name { get; set; }

			[JsonProperty("Level")]
			[FirestoreProperty("Level")]
      public int Level { get; set; }

			[JsonProperty("FamilyId")]
			[FirestoreProperty("FamilyId")]
			public string? FamilyId { get; set; }

			[JsonProperty("LifeSkills")]
			[FirestoreProperty("LifeSkills")]
			public Dictionary<string, int> LifeSkills { get; set; } = new Dictionary<string, int>();
    }
}
