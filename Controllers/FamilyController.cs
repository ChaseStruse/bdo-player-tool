using System.Reflection;
using System.Runtime.InteropServices;
using System;
using Microsoft.AspNetCore.Mvc;
using bdo_player_tool.Models;
using bdo_player_tool.Repositories;
namespace bdo_player_tool.Controllers;

[ApiController]
[Route("[controller]")]
public class FamilyController : ControllerBase {

	private readonly FamilyRepository _repository = new FamilyRepository();
	
	[HttpGet]
	[Route("getFamily/{documentId}")]
	public async Task<Family>Get (string documentId){
		var family = await _repository.GetFamilyAsync(documentId);
		return family;
	}
}

