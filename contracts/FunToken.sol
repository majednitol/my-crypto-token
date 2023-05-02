// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FunToken {
    string public name = "FunToken";
    string public symbol = "FUN";
    string public standard = "FunToken v.0.1";
    uint256 public totalSupply;
    uint256 public userId;
    address public ownerOfContract;
    address[] public holderToken;
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
    mapping(address => TokenHlolderInfo) public tokenHlolderInfos;
    mapping(address => mapping(address => uint256)) public allowance;
    struct TokenHlolderInfo {
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _totalSupply) {
        ownerOfContract = msg.sender;
        balanceOf[msg.sender] = _totalSupply;
        totalSupply = _totalSupply;
    }

    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(
            balanceOf[msg.sender] >= _value,
            "tansfer value should be less than main balance"
        );

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        TokenHlolderInfo storage tokenHlolderInfo = tokenHlolderInfos[_to];
        tokenHlolderInfo._to = _to;
        tokenHlolderInfo._from = msg.sender;
        tokenHlolderInfo._totalToken += _value;
        tokenHlolderInfo._tokenHolder = true;

        if (tokenHlolderInfos[_to]._tokenId == 0) {
            userId++;
            tokenHlolderInfos[_to]._tokenId = userId;
            holderToken.push(_to);
        }

        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function getTokenHolderData(
        address _address
    ) public view returns (uint256, address, address, uint256, bool) {
        return (
            tokenHlolderInfos[_address]._tokenId,
            tokenHlolderInfos[_address]._to,
            tokenHlolderInfos[_address]._from,
            tokenHlolderInfos[_address]._totalToken,
            tokenHlolderInfos[_address]._tokenHolder
        );
    }

    function getTokenHolder() public view returns (address[] memory) {
        return holderToken;
    }
}
