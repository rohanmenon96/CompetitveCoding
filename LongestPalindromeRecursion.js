let input = "abacdedc";
let newLongest = "";
function LongestPalindrome(i,j)
		{
			if(i==0)
					{
						if(input[i]==input[j])
								{
									newLongest = input[i] + input[i+j];
									LongestPalindrome(i,j+1);
								}
						else
								{
									return newLongest;
								}
					}
			if(input[i+j]==input[i-j] && ((input[i+j] && input[i-j]) != undefined ))
					{
						newLongest = input[i+j] + input[i] + input[i-j];
						LongestPalindrome(i,j+1);
					}
			else
					{
						return newLongest;
					}
		}

for(let k=0; k<input.length; k++)
		{
			console.log(LongestPalindrome(k,1));
		}	
