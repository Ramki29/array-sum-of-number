let array=[1,2,3,4,5,6];
var sum=0;
var count=0;
function calculateSum(array)
	{
	for(i=0; i<array.length; i++)
		{
		sum+=array[i];
		count++;
		}
		return sum/count;
	}
	document.write(calculateSum(array));