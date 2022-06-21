using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace bdo_player_tool.Models {

	[FirestoreData]
	public class Family {
		
		[JsonProperty("FamilyName")]
		[FirestoreProperty("FamilyName")]
		public string? FamilyName { get; set; }
	}
}
