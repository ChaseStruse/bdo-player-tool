using System.Reflection;
using System.Runtime.InteropServices;
using System;
using Microsoft.AspNetCore.Mvc;
using bdo_player_tool.Models;
using bdo_player_tool.Repositories;
namespace bdo_player_tool.Controllers;

[ApiController]
[Route("[controller]")]
public class FamilyMemberController : ControllerBase
{
    private readonly FamilyMemberRepository _repository = new FamilyMemberRepository();
    private readonly ILogger<FamilyMemberController> _logger;

    public FamilyMemberController(ILogger<FamilyMemberController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
		[Route("getFamilyMember/{id}")]
    public async Task<FamilyMember> GetById(string id)
    {
      var familyMember = await _repository.GetById(id);
      return familyMember;
    }
}
