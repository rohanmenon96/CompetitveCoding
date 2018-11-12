let input = "cqrrtrrasd";
let LongestSubstring = "";
let newLongest = "";
input = input.split("");
for(let i=0; i<input.length; i++)
	{
		newLongest = input[i];
		if(i==0)
			{
				for(let j=1; j<input.length; j++)
					{				
						if(input[i]==input[j])
							{
								LongestSubstring = input[j] + LongestSubstring + input[j];
							}
						else
							{
								break;
							}
					}
			}
		else
			{
				for(let j=1; j<input.length; j++)
					{
						if((input[i+j] || input[i-j] ) == undefined) break;
					
						if(input[i+j]==input[i-j])
							{
								newLongest = input[i+j] + newLongest + input[i+j]; 
							}
						else
							{
								break;
							}
					}
				if(newLongest.length > LongestSubstring.length)
					{
						LongestSubstring = newLongest;
						newLongest = "";
					}
			}
	}
console.log("Longest Palindrome LongestSubstring : ", LongestSubstring);