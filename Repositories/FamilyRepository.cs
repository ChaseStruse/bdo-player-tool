using bdo_player_tool.Models;
using Google.Cloud.Firestore;

namespace bdo_player_tool.Repositories {

	public class FamilyRepository {
		
		FirestoreDb db = FirestoreDb.Create("bdo-helper-365d3");
		const string COLLECTION = "Family";

		public async Task<Family> GetFamilyAsync(string documentId) {
			DocumentReference familyRef = db.Collection(COLLECTION).Document(documentId);
			DocumentSnapshot snapshot = await familyRef.GetSnapshotAsync();

			if(snapshot.Exists) {
				var family = snapshot.ConvertTo<Family>();
				return family;
			}
			else{
				return null;
			}
		}
	}

}
