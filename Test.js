// Navin Test
function check(a, selection, target)
{
  let sum = 0;
  for(let n=0;n<a.length;n++)
  {
    if(((selection>>n) & 1) == 1)
      sum += a[n];
  }
  return sum==target;
}

function exclude(a, selection)
{
  let res = [a.length];
  let j = 0;
  for(let n=0;n<a.length;n++)
  {
    if(((selection>>n) & 1) == 0) res[j++] = a[n];
  }
  return res
}

function getCurry(a)
{
  let sum = a.reduce((accumulator, currentValue) => accumulator + currentValue);
  if(sum%3 > 0)
    return "noLuck";
  let target = sum/3;
  let max1 = 1<<a.length;
  for(let n=0;n<max1;n++)
  {
    if(check(a, n, target))
    {
      let b = exclude(a, n);
      let max2 = 1<<b.length; 
      for(let j=0;j<max2;j++)
      {
        if(check(b, j, target))
          return formatSolution(n, j, a.length);
      }
    }
  }
  return "noLuck";
}

function formatSolution(p, q, len)
{   
  let res = new Array(len)
  res.fill('R')
  let j = 0;
  for(let n=0;n<len;n++)
  {
    if(((p>>n) & 1) == 1)
      res[n] = 'P';
    else
    {
      if(((q>>j) & 1) == 1)
        res[n] = 'Q';
      j++;
    }
  }
  return new String(res);
}

        let a = [5, 4, 3, 3, 3, 3, 3, 3]
        getCurry(a)