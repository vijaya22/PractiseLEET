/* Write your T-SQL query statement below */
select business_id from
(select business_id, event_type, occurences,
avg(occurences) OVER(partition by event_type) as average
from events) t
where occurences > average
group by business_id
having count(*) > 1;